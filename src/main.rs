mod pages;

use sycamore::prelude::*;
#[cfg(not(feature = "ssg"))]
use sycamore_router::{Router, HistoryIntegration};

#[cfg(all(not(debug_assertions), not(feature = "ssg")))]
fn main() {
    sycamore::hydrate(|cx| view! { cx,
        Router(
            integration=HistoryIntegration::new(),
            view=pages::switch
        )
    });
}

#[cfg(all(debug_assertions, not(feature = "ssg")))]
fn main() {
    sycamore::render(|cx| view! { cx,
        Router(
            integration=HistoryIntegration::new(),
            view=pages::switch
        )
    });
}

#[cfg(feature = "ssg")]
fn main() {
    use sycamore_router::StaticRouter;

    let out_dir = std::env::args().nth(1).unwrap();

    println!("out_dir {}", out_dir);

    let template = std::fs::read_to_string(format!("{}/index.html", out_dir)).unwrap();

    for route in pages::Page::ALL_PRERENDER {
        println!("Prerendering route \"{}\"", route);

        let html = sycamore::render_to_string(|cx| view! { cx,
            StaticRouter(
                route=route.clone(),
                view=pages::switch
            )
        });

        let html = template.replace("<!-- body -->\n", &html);

        let mut route_str = route.to_string();

        if route_str == "/" {
            route_str = "index".to_string();
        }

        println!("Writing html to file \"{}\"", format!("{}.html", route_str));
        std::fs::write(format!("{}/{}.html", out_dir, route_str), html).unwrap();
    }
}
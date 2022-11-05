use sycamore::prelude::*;

#[component]
pub fn NotFound<G: Html>(cx: Scope) -> View<G> {
    view! { cx,
        p {
            h1 {
                "404"
            }
            a(href = "/") {
                "Get me back!!"
            }
        }
    }
}
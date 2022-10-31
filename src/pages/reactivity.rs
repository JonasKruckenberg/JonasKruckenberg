use sycamore::prelude::*;

#[component]
pub fn ReactivityTest<G: Html>(cx: Scope) -> View<G> {
    let counter = create_signal(cx, 0);

    view! { cx, 
        "Reactivity test:"
        p {
            (counter.get())
        }
        button(on:click=|_| counter.set(*counter.get() + 1)) {
            "Increment"
        }
    }
}
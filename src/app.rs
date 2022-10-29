use yew::prelude::*;

#[function_component(App)]
pub fn app() -> Html {
    let counter = use_state(|| 0);
    let onclick = {
        let counter = counter.clone();
        Callback::from(move |_| counter.set(*counter + 1))
    };

    html! {
        <div>
            <h1>{"Jonas Kruckenberg"}</h1>

            <p>{"Hey! My website is currently under construction, so there is nothing here."}</p>

            <p>
                {"In the meantime, check out my "} 
                <a href="https://github.com/JonasKruckenberg">{"GitHub"}</a> 
                {" or "} 
                <a href="https://github.com/JonasKruckenberg">{"Twitter"}</a>
                {" Profile, or click this button it's the only thing on this website that does something."}
            </p>

            <button {onclick}>{ "Click Me" }</button>
            <p>
                { *counter }
            </p>
        </div>
    }
}

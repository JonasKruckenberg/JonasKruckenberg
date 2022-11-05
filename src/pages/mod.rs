mod not_found;
mod home;
mod reactivity;

use core::fmt::Display;
use sycamore::view::View;
use sycamore_router::Route;
use sycamore::prelude::*;

#[derive(Debug, Clone, Route)]
pub enum Page {
    #[to("/")]
    Home,
    #[to("/reactivity")]
    ReactivityTest,
    #[not_found]
    NotFound,
}

impl Display for Page {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Page::Home => write!(f, "/"),
            Page::ReactivityTest => write!(f, "/reactivity"),
            Page::NotFound => panic!(),
        }
    }
}

impl<'a> Page {
    #[cfg(feature = "ssg")]
    pub const ALL_PRERENDER: &'a [Page] = &[
        Page::Home,
        Page::ReactivityTest
    ];
}

pub fn switch<G: Html>(cx: Scope, route: &ReadSignal<Page>) -> View<G> {
    match route.get().as_ref() {
        Page::Home => home::Home(cx),
        Page::ReactivityTest => reactivity::ReactivityTest(cx),
        Page::NotFound => not_found::NotFound(cx)
    }
}
---
layout: "../../layouts/BlogPost.astro"
title: "ABQ Notes: Towards an Idiomatic Ecosystem"
description: "What does it mean for a crate to be idiomatic?"
heroImage: "/src/assets/clyde_abq.jpg"
draft: false
---

_As I'm writing this I am sitting in the lobby of the Clyde Hotel in Albuquerque, New Mexico in the days after [RustConf 2023](https://rustconf.com). This is a writeup of one of the many great conversations I had there._

<br />

Writing *Idiomatic Rust* means following its conventions, pre-established patterns, and techniques. These conventions, which have slowly been established over time, help newcomers and experts to write *predictable code*.

Why is it so important that your code is predictable, you ask?

Consider a crate I just made up: `beach-bytes` (it's [`bytes`](https://crates.io/bytes) but more handsome) that's essentially a fancy `Vec<u8>`. I want to support converting my crates' primary type `BeachBytes` into various other types.
But how do I expose these conversions to people consuming my crate? A function called `convert(format)` that I tell which format I want?

```rust
// like this???
impl BeachBytes {
    pub fn convert(format: &str) {
        match format {
            "json" => // impl
            "str" => // impl
        }
    }
}
```
<br />

Luckily, there exists a convention here [^1]: `as_` indicates a free or very cheap conversion - often just casting a pointer or returning a reference to some inner value - while `to_` signifies an expensive conversion, and `into_` means the function operates on owned values.

```rust
// like this!
impl BeachBytes {
    pub fn as_str(&self) -> &str {
        // impl
    }

    pub fn into_json(&self) -> serde_json::Value {
        // impl
    }
}
```
<br />

**This is great!** It means less worrying about naming for me, less reading docs and trying to figure out what does what for my users, and an easier time understanding my codebase for possible contributors!

<br />

**Conventions reduce the mental overhead for everybody involved.**

<br />

It's important to note that conventions don't appear out of thin air either; they were forged in fire by people with the same problem you are facing.
In this way, they are an essential tool for sharing knowledge. <br />
Often, the problems one faces aren't unique, and some fellow programmers have met them before. <br />
Conventions are like hikers leaving helpful markers along the trail for later hikers (including themselves!) to benefit from.

This is especially true for Rust, where techniques from other languages often don't transfer too well because of the borrow rules unique design. Idiomatic Rust is a set of practices and rules aggregated by experienced rustaceans to deal with everyday problems elegantly and predictably.

Now, this is all fine and dandy; A lot has been written about Idiomatic Rust Code by people who are way more intelligent and experienced than me. There is little I could contribute to that discussion.

However, I firmly believe that the above definition is missing a key aspect:

<br />

**A project is far more than just it's code!**

<br />

A project often includes CI/CD workflows, configuration files, documentation, a license, etc. These files often tend to cause even greater headaches for programmers than the code itself, and they aren't even the focus of your work! <br/>
And while there are some tips scattered across the internet, every project has its own quirky solutions.

- **MSRV policies** <br />
There currently is no consensus on how to handle a project's MSRV (Minimum Support Rust Version): Some crates only increase the MSRV in major updates[^3], some in minor or even patch updates, some bump the MSRV on a fixed schedule [^5] (often supporting what's called N-<x> versions where x is the number of versions a crate chooses to support). In contrast, others do this manually and only when needed.

- **CI setups** <br />
They come in all shapes and sizes and often disagree with what is being checked, tested, or benchmarked and when. When should you run `cargo check`, `cargo clippy`, or `cargo test`? With what options? Should you test against nightly Rust? What about beta? When are dependencies bumped?
Projects rarely agree on anything here.

- **Build Scripts** <br />
Very little agreement exists on how build scripts should behave, especially how `-sys` crates should handle dependency detection and lookup.

In conclusion, recall this finding we started out with:

> Conventions reduce the mental overhead for everybody involved.

The fragmentation I hoped I illustrated above inflicts real pain on consumers and contributors, often making integrating a crate harder.
It means consumers can't fully trust upstream dependencies to not break their builds. Possible contributors have a more challenging time getting up-to-speed with a codebase.

I would argue we should start to share our knowledge, pool our experience, and **define what it means for a project to be an _Idiomatic Rust Project._**

## How Do We Get There?

### A Common Place

The first order of business should be aggregating the many scattered techniques from across the internet into a shared place. For example, a mdbook in the style of the [Rust API Guidelines](https://rust-lang.github.io/api-guidelines/`) book. Featuring tips, tricks, guides, links, and a one-stop checklist.

At the same time, we should compile a set of "standard" GitHub action workflows for easy copy-pasting. Of course, people will want and need to customize their workflows, but a starter workflow should serve most users out-of-the-box and can serve as a starting point for people who need more.

### Automation

The best conventions are worth little if they can't be easily enforced. To this end, [`clippy`](https://github.com/rust-lang/rust-clippy) does a wonderful job for Rust *code*, and even tools like [`cargo-semver-checks`](https://github.com/obi1kenobi/cargo-semver-checks), [`cargo-deny`](https://github.com/EmbarkStudios/cargo-deny), or [`Swatinem/rust-cache`](https://github.com/Swatinem/rust-cache) already do a lot of work to ensure your crate is a good citizen of the ecosystem.
However, many opportunities remain to build more automation and tooling around Rust.

### WG Idiomatic Ecosystem?

Lastly, we need a common space to discuss these efforts, share ideas, and work on solutions. Would it make sense to start a Rust Working Group focusing on making the ecosystem more idiomatic? I think it does! <br />
So are you maintaining a Rust project?


So do you have experiences, setups, or tools you want to share with the community? <br />
**Get in touch!**

_From the not so sunny Albuquerque, New Mexico_ <br />
_Jonas Kruckenberg_

[^1]: Outlined here https://rust-lang.github.io/api-guidelines/naming.html#ad-hoc-conversions-follow-as_-to_-into_-conventions-c-conv
[^3]: Tauri originally was on the side of "MSRV bumps are semver-major" and therefore had to pin a whole bunch of dependencies causing problems all-around. As the side it picked seemed to be the loosing side anyway, the project is going to switch to an N-X MSRV policy with version 2.
[^5]: [clap](https://github.com/clap-rs/clap) generally speaking has a MSRV policy of N-6, bumping manually when newer rust versions are desirable

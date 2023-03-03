---
layout: "../../layouts/BlogPost.astro"
title: "Cool crates I like"
description: ""
pubDate: "Feb 04 2023"
draft: true
---

## `static-rc`

Let's suppose you want to build a doubly-linked-list in Rust. How you you go about that?

```rust
struct LinkedList<T> {
    head: Node<T>,
    tail: Node<T>
}

struct Node<T> {
    value: T,
    prev: Node<T>,
    next: Node<T>,
}
```

```rust
impl<T> LinkedList<T> {
    pub fn push_back(&mut self, data: T) {
        
    }
}
```




```rust
struct LinkedList<T> {
    head_tail: Option<(NodeRef<T>, NodeRef<T>)>,
}

struct Node<T> {
    value: T,
    prev: Option<NodeRef<T>>,
    next: Option<NodeRef<T>>,
}

type NodeRef<T> = Rc<RefCell<Node<T>>>;
```








```typescript
class Node<T> {
    prev: Node<T>,
    next: Node<T>,
    data: T
}

class DoublyLinkedList {
    head_tail: [Node<T>, Node<T>],

    append(data: T) {
        const new_tail = new Node(data)

        if (this.head_tail) {
            const [head, tail] = this.head_tail

            tail.next = new_tail
            new_tail.prev = tail

            this.head_tail = [head, new_tail] 
        } else {
            this.head_tail = [new_tail, new_tail] 
        }
    }
}
```

## `ghost-cell`

## `fst`

## `blake3`

Cryptography is hard. Not only designing but also implementing any cryptographic algorithm is error-prone and the stakes are incredibly high. So it's understandable that the Rust cryptography ecosystem is relatively small and most of the crates are bindings to existing C-based libraries. 

So it's very exciting to me that `blake3` 

## `sycamore`
## `heapless`
## `snafu`
## `bitflags`
## `pretty_assertions`
## `crossbeam`
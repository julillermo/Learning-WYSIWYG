# Learning-WYSIWYG

Playground for trying out WYSIWYG Editors

## Included WYSIWYG Editors

- [Quill](https://github.com/slab/quill)

## WYSIWYG Editors of interest (planned editors)

- [tiptap](https://tiptap.dev/)
- [notectl](https://github.com/Samyssmile/notectl)
- [lexical](https://lexical.dev/)
- [BlockNote](https://github.com/TypeCellOS/BlockNote)
- [Jodit](https://github.com/xdan/jodit)
- [editor.js](https://github.com/codex-team/editor.js)

## Quill.js

### Server-side rendering consideration.

- Upon testing, I found out that Quill.js is a client-side only rich text editor.
  - Some part of its code refers to `document` on import. This is unavailable on the server leads into an error. [[Quill Issue #4594]](https://github.com/slab/quill/issues/4594#issuecomment-3974010745).
  - I created a separate repository for demonstrating ways to overcome this.
    [[ssr-quill-demo]](https://github.com/julillermo/ssr-quill-demo)

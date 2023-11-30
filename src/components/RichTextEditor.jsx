"use client";

import { useCallback, useState } from "react";
import { CgUndo, CgRedo } from "react-icons/cg";
import {
  MdCode,
  MdFormatBold,
  MdFormatItalic,
  MdFormatQuote,
  MdFormatUnderlined,
  MdStrikethroughS,
  MdSubscript,
  MdSuperscript,
} from "react-icons/md";
import { LuHeading } from "react-icons/lu";
import { VscListOrdered, VscListUnordered } from "react-icons/vsc";
import { GoLink } from "react-icons/go";
import { AiFillCode } from "react-icons/ai";
import { EditorContent, useEditor } from "@tiptap/react";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import TextStyle from "@tiptap/extension-text-style";
import ListItem from "@tiptap/extension-list-item";
import Link from "@tiptap/extension-link";
import StarterKit from "@tiptap/starter-kit";
import HTMLReactParser from "html-react-parser";

export const EditorHeader = ({ editor }) => {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === url) {
      return;
    }
    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap border-b border-b-sky-700 bg-sky-50 px-3 py-2 dark:border-b-sky-300 dark:bg-sky-900">
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950"
      >
        <CgUndo size={20} />
        <span className="sr-only">Undo</span>
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950"
      >
        <CgRedo size={20} />
        <span className="sr-only">Redo</span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950 ${
          editor.isActive("bold") && "bg-sky-200 dark:bg-sky-950"
        }`}
      >
        <MdFormatBold size={20} />
        <span className="sr-only">Bold</span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`dark:active:bg-sky-950" rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 ${
          editor.isActive("italic") && "bg-sky-200 dark:bg-sky-950"
        }`}
      >
        <MdFormatItalic size={20} />
        <span className="sr-only">Italic</span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={`"hover:bg-sky-100 dark:active:bg-sky-950"
          rounded p-2 active:bg-sky-200 dark:hover:bg-sky-800 ${
            editor.isActive("underline") && "bg-sky-200 dark:bg-sky-950"
          }`}
      >
        <MdFormatUnderlined size={20} />
        <span className="sr-only">Underline</span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`dark:active:bg-sky-950"} rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 ${
          editor.isActive("strike") && "bg-sky-200 dark:bg-sky-950"
        }`}
      >
        <MdStrikethroughS size={20} />
        <span className="sr-only">Strikethrough</span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 2 }).run()
        }
        className={`rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950 ${
          editor.isActive("heading", { level: 2 }) &&
          "bg-sky-200 dark:bg-sky-950"
        }`}
      >
        <LuHeading size={20} />
        <span className="sr-only">Heading Level 2</span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleSubscript().run()}
        disabled={!editor.can().chain().focus().toggleSubscript().run()}
        className={`rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950 ${
          editor.isActive("subscript") && "bg-sky-200 dark:bg-sky-950"
        }`}
      >
        <MdSubscript size={20} />
        <span className="sr-only">Subscript</span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleSuperscript().run()}
        disabled={!editor.can().chain().focus().toggleSuperscript().run()}
        className={`dark:active:bg-sky-950" rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 ${
          editor.isActive("superscript") && "bg-sky-200 dark:bg-sky-950"
        }`}
      >
        <MdSuperscript size={20} />
        <span className="sr-only">Superscript</span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        className={`rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950 ${
          editor.isActive("bulletList") && "bg-sky-200 dark:bg-sky-950"
        }`}
      >
        <VscListUnordered size={20} />
        <span className="sr-only">Bullet List</span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        className={`rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950 ${
          editor.isActive("orderedList") && "bg-sky-200 dark:bg-sky-950"
        }`}
      >
        <VscListOrdered size={20} />
        <span className="sr-only">Ordered List</span>
      </button>
      <button
        onClick={setLink}
        className={`rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950 ${
          editor.isActive("link") && "bg-sky-200 dark:bg-sky-950"
        }`}
      >
        <GoLink size={20} />
        <span className="sr-only">Link</span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950 ${
          editor.isActive("code") && "bg-sky-200 dark:bg-sky-950"
        }`}
      >
        <MdCode size={20} />
        <span className="sr-only">Code Inline</span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        className={`rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950 ${
          editor.isActive("codeBlock") && "bg-sky-200 dark:bg-sky-950"
        }`}
      >
        <AiFillCode size={20} />
        <span className="sr-only">Code Block</span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        disabled={!editor.can().chain().focus().toggleBlockquote().run()}
        className={`rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950 ${
          editor.isActive("blockquote") && "bg-sky-200 dark:bg-sky-950"
        }`}
      >
        <MdFormatQuote size={20} />
        <span className="sr-only">Blockquote</span>
      </button>
    </div>
  );
};

export const EditorFooter = ({
  editor,
  content,
  writeMode,
  setWriteMode,
  mode,
  submitting,
  onAddOrSaveClick,
}) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex justify-between border-t border-t-sky-700 bg-sky-50 dark:border-t-sky-300 dark:bg-sky-900">
      <div>
        <button
          onClick={() => {
            setWriteMode(true);
            editor.setEditable(true);
          }}
          className={`px-3 py-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 ${
            writeMode && "bg-sky-200 font-bold dark:bg-sky-950"
          }`}
        >
          Write
        </button>
        <button
          onClick={() => {
            setWriteMode(false);
            editor.setEditable(false);
          }}
          className={`px-3 py-2 hover:bg-sky-100 dark:hover:bg-sky-800 ${
            !writeMode && "bg-sky-200 font-bold dark:bg-sky-950"
          }`}
        >
          Preview
        </button>
      </div>
      {submitting ? (
        <button className="flex cursor-not-allowed px-3 py-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950">
          <svg
            className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {(mode === "add" && "Add") || (mode === "save" && "Save")}
        </button>
      ) : (
        <button
          onClick={onAddOrSaveClick}
          className="px-3 py-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950"
        >
          {(mode === "add" && "Add") || (mode === "save" && "Save")}
        </button>
      )}
    </div>
  );
};

export default function RichTextEditor({
  content,
  setContent,
  mode,
  isSubmitting,
  setIsSubmmitting,
  onAddOrSaveClick,
}) {
  const [writeMode, setWriteMode] = useState(true);
  const editor = useEditor({
    extensions: [
      Placeholder.configure({
        placeholder: "Write your answer or reply here...",
      }),
      Underline,
      Superscript,
      Subscript,
      TextStyle.configure({ types: [ListItem.name] }),
      Link.configure({
        protocols: [
          "ftp",
          "mailto",
          {
            scheme: "tel",
            optionalSlashes: true,
          },
        ],
        validate: (href) => /^https?:\/\//.test(href),
      }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm prose-slate m-5 max-h-[20rem] min-h-[20rem] overflow-y-auto dark:prose-invert sm:prose-base focus:outline-none",
      },
    },
    content: content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  return (
    <div className="overflow-hidden rounded-lg border border-sky-700 dark:border-sky-300">
      {writeMode ? (
        <>
          <EditorHeader editor={editor} />
          <EditorContent editor={editor} />
        </>
      ) : (
        <>
          <div className="h-[3rem] border-b border-b-sky-700 bg-sky-50 px-3 py-2 dark:border-b-sky-300 dark:bg-sky-900"></div>
          <div className="prose prose-sm prose-slate m-5 max-h-[20rem] min-h-[20rem] overflow-y-auto dark:prose-invert sm:prose-base focus:outline-none">
            {HTMLReactParser(content)}
          </div>
        </>
      )}
      <EditorFooter
        editor={editor}
        content={content}
        writeMode={writeMode}
        setWriteMode={setWriteMode}
        mode={mode}
        submitting={isSubmitting}
        setSubmmitting={setIsSubmmitting}
        onAddOrSaveClick={onAddOrSaveClick}
      />
    </div>
  );
}

"use client";

import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import Placeholder from "@tiptap/extension-placeholder";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { type Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { cn } from "cnfast";
import HTMLReactParser from "html-react-parser";
import { useCallback, useState } from "react";
import { AiFillCode } from "react-icons/ai";
import { CgRedo, CgUndo } from "react-icons/cg";
import { GoLink } from "react-icons/go";
import { LuHeading } from "react-icons/lu";
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
import { VscListOrdered, VscListUnordered } from "react-icons/vsc";

export const EditorHeader = ({ editor }: { editor: Editor | null }) => {
  const setLink = useCallback(() => {
    if (!editor) return;

    const previousUrl = editor.getAttributes("link").href;
    const url = prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
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
    return;
  }

  return (
    <div className="flex flex-wrap border-b border-b-sky-700 bg-sky-50 px-3 py-2 dark:border-b-sky-300 dark:bg-sky-900">
      <button
        className="rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950"
        disabled={!editor.can().chain().focus().undo().run()}
        onClick={() => editor.chain().focus().undo().run()}
      >
        <CgUndo size={20} />
        <span className="sr-only">Undo</span>
      </button>
      <button
        className="rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950"
        disabled={!editor.can().chain().focus().redo().run()}
        onClick={() => editor.chain().focus().redo().run()}
      >
        <CgRedo size={20} />
        <span className="sr-only">Redo</span>
      </button>
      <button
        className={cn(
          "rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950",
          editor.isActive("bold") && "bg-sky-200 dark:bg-sky-950",
        )}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <MdFormatBold size={20} />
        <span className="sr-only">Bold</span>
      </button>
      <button
        className={cn(
          "rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950",
          editor.isActive("italic") && "bg-sky-200 dark:bg-sky-950",
        )}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <MdFormatItalic size={20} />
        <span className="sr-only">Italic</span>
      </button>
      <button
        className={cn(
          "rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950",
          editor.isActive("underline") && "bg-sky-200 dark:bg-sky-950",
        )}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <MdFormatUnderlined size={20} />
        <span className="sr-only">Underline</span>
      </button>
      <button
        className={cn(
          "rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950",
          editor.isActive("strike") && "bg-sky-200 dark:bg-sky-950",
        )}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <MdStrikethroughS size={20} />
        <span className="sr-only">Strikethrough</span>
      </button>
      <button
        className={cn(
          "rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950",
          editor.isActive("heading", { level: 2 }) &&
            "bg-sky-200 dark:bg-sky-950",
        )}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 2 }).run()
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <LuHeading size={20} />
        <span className="sr-only">Heading Level 2</span>
      </button>
      <button
        className={cn(
          "rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950",
          editor.isActive("subscript") && "bg-sky-200 dark:bg-sky-950",
        )}
        disabled={!editor.can().chain().focus().toggleSubscript().run()}
        onClick={() => editor.chain().focus().toggleSubscript().run()}
      >
        <MdSubscript size={20} />
        <span className="sr-only">Subscript</span>
      </button>
      <button
        className={cn(
          "rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950",
          editor.isActive("superscript") && "bg-sky-200 dark:bg-sky-950",
        )}
        disabled={!editor.can().chain().focus().toggleSuperscript().run()}
        onClick={() => editor.chain().focus().toggleSuperscript().run()}
      >
        <MdSuperscript size={20} />
        <span className="sr-only">Superscript</span>
      </button>
      <button
        className={cn(
          "rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950",
          editor.isActive("bulletList") && "bg-sky-200 dark:bg-sky-950",
        )}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <VscListUnordered size={20} />
        <span className="sr-only">Bullet List</span>
      </button>
      <button
        className={cn(
          "rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950",
          editor.isActive("orderedList") && "bg-sky-200 dark:bg-sky-950",
        )}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <VscListOrdered size={20} />
        <span className="sr-only">Ordered List</span>
      </button>
      <button
        className={cn(
          "rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950",
          editor.isActive("link") && "bg-sky-200 dark:bg-sky-950",
        )}
        onClick={setLink}
      >
        <GoLink size={20} />
        <span className="sr-only">Link</span>
      </button>
      <button
        className={cn(
          "rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950",
          editor.isActive("code") && "bg-sky-200 dark:bg-sky-950",
        )}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        onClick={() => editor.chain().focus().toggleCode().run()}
      >
        <MdCode size={20} />
        <span className="sr-only">Code Inline</span>
      </button>
      <button
        className={cn(
          "rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950",
          editor.isActive("codeBlock") && "bg-sky-200 dark:bg-sky-950",
        )}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        <AiFillCode size={20} />
        <span className="sr-only">Code Block</span>
      </button>
      <button
        className={cn(
          "rounded p-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950",
          editor.isActive("blockquote") && "bg-sky-200 dark:bg-sky-950",
        )}
        disabled={!editor.can().chain().focus().toggleBlockquote().run()}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <MdFormatQuote size={20} />
        <span className="sr-only">Blockquote</span>
      </button>
    </div>
  );
};

interface EditorFooterProperties {
  editor: Editor | null;
  isWriteMode: boolean;
  mode: string;
  onAddOrSaveClick: () => void;
  setWriteMode: (isWriteMode: boolean) => void;
  submitting: boolean;
}

export const EditorFooter = ({
  editor,
  isWriteMode,
  mode,
  onAddOrSaveClick,
  setWriteMode,
  submitting,
}: EditorFooterProperties) => {
  if (!editor) {
    return;
  }

  return (
    <div className="flex justify-between border-t border-t-sky-700 bg-sky-50 dark:border-t-sky-300 dark:bg-sky-900">
      <div>
        <button
          className={cn(
            "px-3 py-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800",
            isWriteMode && "bg-sky-200 font-bold dark:bg-sky-950",
          )}
          onClick={() => {
            setWriteMode(true);
            editor.setEditable(true);
          }}
        >
          Write
        </button>
        <button
          className={cn(
            "px-3 py-2 hover:bg-sky-100 dark:hover:bg-sky-800",
            !isWriteMode && "bg-sky-200 font-bold dark:bg-sky-950",
          )}
          onClick={() => {
            setWriteMode(false);
            editor.setEditable(false);
          }}
        >
          Preview
        </button>
      </div>
      {submitting ? (
        <button className="flex cursor-not-allowed px-3 py-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950">
          <svg
            className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              fill="currentColor"
            ></path>
          </svg>
          {(mode === "add" && "Add") || (mode === "save" && "Save")}
        </button>
      ) : (
        <button
          className="px-3 py-2 hover:bg-sky-100 active:bg-sky-200 dark:hover:bg-sky-800 dark:active:bg-sky-950"
          onClick={onAddOrSaveClick}
        >
          {(mode === "add" && "Add") || (mode === "save" && "Save")}
        </button>
      )}
    </div>
  );
};

interface RichTextEditorProperties {
  content: string;
  isSubmitting: boolean;
  mode: string;
  onAddOrSaveClick: () => void;
  setContent: (content: string) => void;
  setIsSubmitting: (isSubmitting: boolean) => void;
}

export function RichTextEditor({
  content,
  isSubmitting,
  mode,
  onAddOrSaveClick,
  setContent,
}: RichTextEditorProperties) {
  const [isWriteMode, setWriteMode] = useState(true);
  const editor = useEditor({
    content: content,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm prose-slate m-5 max-h-[20rem] min-h-[20rem] overflow-y-auto dark:prose-invert sm:prose-base focus:outline-none",
      },
    },
    extensions: [
      Placeholder.configure({
        placeholder: "Write your answer or reply here...",
      }),
      Underline,
      Superscript,
      Subscript,
      TextStyle.configure({ types: [ListItem.name] } as any), // eslint-disable-line @typescript-eslint/no-explicit-any
      Link.configure({
        protocols: [
          "ftp",
          "mailto",
          {
            optionalSlashes: true,
            scheme: "tel",
          },
        ],
        validate: (href) => /^https?:\/\//.test(href),
      }),
      StarterKit.configure({
        bulletList: {
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
          keepMarks: true,
        },
        orderedList: {
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
          keepMarks: true,
        },
      }),
    ],
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  return (
    <div className="overflow-hidden rounded-lg border border-sky-700 dark:border-sky-300">
      {isWriteMode ? (
        <>
          <EditorHeader editor={editor} />
          <EditorContent editor={editor} />
        </>
      ) : (
        <>
          <div className="h-[3rem] border-b border-b-sky-700 bg-sky-50 px-3 py-2 dark:border-b-sky-300 dark:bg-sky-900"></div>
          <div className="m-5 prose prose-sm max-h-[20rem] min-h-[20rem] overflow-y-auto prose-slate focus:outline-none sm:prose-base dark:prose-invert">
            {HTMLReactParser(content)}
          </div>
        </>
      )}
      <EditorFooter
        editor={editor}
        isWriteMode={isWriteMode}
        mode={mode}
        onAddOrSaveClick={onAddOrSaveClick}
        setWriteMode={setWriteMode}
        submitting={isSubmitting}
      />
    </div>
  );
}

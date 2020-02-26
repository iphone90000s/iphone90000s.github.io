import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import Link from "@ckeditor/ckeditor5-link/src/link";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Font from "@ckeditor/ckeditor5-font/src/font";
import List from "@ckeditor/ckeditor5-list/src/list";

export default {
    methods: {
        initCKEditor() {
            ClassicEditor.create(document.querySelector("#editor"), {
                    language: "en",
                    fontFamily: {
                        options: [
                            "微軟正黑體, Microsoft JhengHei",
                            "Arial, Arial, sans-serif"
                        ]
                    },
                    image: {},
                    plugins: [
                        Essentials,
                        Paragraph,
                        Bold,
                        Italic,
                        EasyImage,
                        Highlight,
                        Link,
                        Underline,
                        Strikethrough,
                        SimpleUploadAdapter,
                        Font,
                        List
                    ],
                    toolbar: [
                        "fontFamily",
                        "fontColor",
                        "fontbackgroundcolor",
                        "fontSize",
                        // "heading",
                        // "list",
                        "bulletedList",
                        "bold",
                        "italic",
                        "imageUpload",
                        "highlight",
                        "link",
                        "underline",
                        "strikethrough"
                    ],
                    simpleUpload: {
                        uploadUrl: "/api/images.php"
                    },
                })
                .then(editor => {
                    this.newData = editor;
                    editor.setData(this.editData);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        initCKEditor2() {
            ClassicEditor.create(document.querySelector("#editor2"), {
                    language: "en",
                    fontFamily: {
                        options: [
                            "微軟正黑體, Microsoft JhengHei",
                            "Arial, Arial, sans-serif"
                        ]
                    },
                    image: {},
                    plugins: [
                        Essentials,
                        Paragraph,
                        Bold,
                        Italic,
                        EasyImage,
                        Highlight,
                        Link,
                        Underline,
                        Strikethrough,
                        SimpleUploadAdapter,
                        Font,
                        List
                    ],
                    toolbar: [
                        "fontFamily",
                        "fontColor",
                        "fontbackgroundcolor",
                        "fontSize",
                        // "heading",
                        // "list",
                        "bulletedList",
                        "bold",
                        "italic",
                        "imageUpload",
                        "highlight",
                        "link",
                        "underline",
                        "strikethrough"
                    ],
                    simpleUpload: {
                        uploadUrl: "/api/images.php"
                    }
                })
                .then(editor => {
                    this.newData2

                    = editor;
                    editor.setData(this.editData);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
}
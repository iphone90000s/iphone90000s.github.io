/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {
	// Define changes to default configuration here. For example:
	config.language = 'zh-tw';
	// config.uiColor = '#AADC6E';
	config.allowedContent = true;
	//config.width=CKwidth;
	//config.height=CKheight;
	config.pasteFromWordRemoveFontStyles = false;
	config.pasteFromWordRemoveStyles = false;
	//是否強制複製來的內容去除格式
	config.forcePasteAsPlainText = false; //不去除
	config.extraPlugins = 'liststyle';
	config.toolbar = 'MXICToolbar';

	config.toolbar_MXICToolbar = [
		['Source', '-', 'Preview'],
		['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Print'],
		['Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll', 'RemoveFormat'],
		['Link', 'Unlink', 'Anchor'],
		'/', ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'],
		['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'],
		['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
		['Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak'],
		'/', ['Styles', 'Format', 'Font', 'FontSize'],
		['TextColor', 'BGColor'],
		['Maximize', 'ShowBlock']
	];

	config.toolbar = 'APPToolbar';

	config.toolbar_APPToolbar = [
		['Source', '-', 'Preview'],
		['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Print'],
		'/', ['Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll', 'RemoveFormat'],
		['Link', 'Unlink', 'Anchor'],
		'/', ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'],
		['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'],
		'/', ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
		['Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak'],
		'/', ['Styles', 'Format', 'Font'],
		'/', ['FontSize', 'TextColor', 'BGColor']
	];
	//開啟圖片上傳功能
	var locArray = location.pathname.split("/");
	//alert(locArray[locArray.length-2]);
	if (locArray[locArray.length - 2] == "system") {
		config.filebrowserBrowseUrl = '../ckfinder/ckfinder.html';
		config.filebrowserImageBrowseUrl = '../ckfinder/ckfinder.html?Type=Images';
		config.filebrowserFlashBrowseUrl = '../ckfinder/ckfinder.html?Type=Flash';
		config.filebrowserUploadUrl = '../ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files'; //可上傳一般檔案
		config.filebrowserImageUploadUrl = '../ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images'; //可上傳圖檔
		config.filebrowserFlashUploadUrl = '../ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'; //可上傳Flash檔案
	} else {
		config.filebrowserBrowseUrl = '../ckfinder/ckfinder.html';
		config.filebrowserImageBrowseUrl = '../ckfinder/ckfinder.html?Type=Images';
		config.filebrowserFlashBrowseUrl = '../ckfinder/ckfinder.html?Type=Flash';
		config.filebrowserUploadUrl = '../ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files'; //可上傳一般檔案
		config.filebrowserImageUploadUrl = '../ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images'; //可上傳圖檔
		config.filebrowserFlashUploadUrl = '../ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'; //可上傳Flash檔案
	}
};
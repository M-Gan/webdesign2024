tinyMCE.init({
	relative_urls: false,
	remove_script_host: false,
	document_base_url: 'https://mywebtraining.net/',
	convert_urls: false,
	theme: "modern",
	mode: "specific_textareas",
	editor_selector: "mceEditor",
	editor_deselector: "mceNoEditor",
	resize: 'both',
	autoresize_max_height: 470,
	browser_spellcheck: true,
	content_css: "templates/css/base.css, templates/css/w3pro.css",
	plugins: [
		"advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
		"searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
		"save table contextmenu directionality emoticons template paste textcolor autoresize"
	],
	autoresize_bottom_margin: 5,
	autoresize_min_height: 100,
	toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | print preview media | forecolor backcolor | emoticons charmap",
	style_formats: [
		{ title: 'Heading 1', block: 'h1' },
		{ title: 'Heading 2', block: 'h2' },
		{ title: 'Heading 3', block: 'h3' },
		{ title: 'Heading 4', block: 'h4' },
		{ title: 'Heading 5', block: 'h5' },
		{ title: 'Heading 6', block: 'h6' },
		{ title: 'Paragraph text', block: 'p', styles: { color: '#000000' } },
		{ title: 'Bold text', inline: 'b' },
		{ title: 'Red text', inline: 'span', styles: { color: '#990000' } },
		{ title: 'Red header', block: 'h1', styles: { color: '#990000' } },
		{ title: 'Code Tag', inline: 'code' },
		{ title: 'Comment Style Span', inline: 'span', classes: 'comment' },
		{ title: 'var Tag for HTML Entities', inline: 'var' },
		{ title: 'HTML Span', inline: 'code', classes: 'language-markup' },
		{ title: 'CSS Span', inline: 'code', classes: 'language-css' },
		{ title: 'JS Span', inline: 'code', classes: 'language-js' },
		{ title: 'SQL Span', inline: 'code', classes: 'language-sql' },
		{ title: 'PHP Span', inline: 'code', classes: 'language-php' },
		{ title: 'Pre tag', block: 'pre' },
	]
});
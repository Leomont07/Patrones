const Report = require('./Report');
const BlogPost = require('./BlogPost');

// Publicación de un informe
console.log('--- Publicación de un Informe ---');
const report = new Report();
report.publish();

// Publicación de un artículo de blog
console.log('--- Publicación de un Artículo de Blog ---');
const blogPost = new BlogPost();
blogPost.publish();

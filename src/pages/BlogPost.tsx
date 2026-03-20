import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Blog GCF Transportes</title>
        <meta name="description" content={post.summary} />
        <link rel="canonical" href={`https://gcf-movement-made-easy.lovable.app/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:image" content={post.imageUrl} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.summary,
            "image": post.imageUrl,
            "datePublished": post.date,
            "author": { "@type": "Organization", "name": post.author },
            "publisher": { "@type": "Organization", "name": "GCF Transportes" }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-20">
          <article className="container mx-auto px-4 max-w-3xl">
            {/* Back link */}
            <Link to="/blog">
              <Button variant="ghost" className="mb-8 -ml-2 text-muted-foreground hover:text-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao blog
              </Button>
            </Link>

            {/* Header */}
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ lineHeight: '1.15' }}>
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                  </time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden mb-10">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full aspect-video object-cover"
              />
            </div>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:text-primary prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-primary
                prose-a:text-secondary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Back CTA */}
            <div className="mt-16 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground mb-4">Gostou do conteúdo? Confira mais artigos no nosso blog.</p>
              <Link to="/blog">
                <Button variant="cta">Ver todos os artigos</Button>
              </Link>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;

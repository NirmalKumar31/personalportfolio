import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { CustomMDX, ScrollToHash } from "@/components";
import { Metadata } from "next";
import styles from "./slug.module.css";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getPosts(["src", "app", "work", "projects"]).find(
    (post) => post.slug === slugPath
  );

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image ||
          `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <div className={styles.header}>
        <a href="/projects" className={styles.back}>← Projects</a>
        <h1 className={styles.title}>{post.metadata.title}</h1>
        <div className={styles.meta}>
          {post.metadata.projectType && (
            <span className={styles.typeTag}>{post.metadata.projectType}</span>
          )}
          {post.metadata.link && (
            <a
              href={post.metadata.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>

      {post.metadata.images && post.metadata.images.length > 0 && (
        <img
          src={post.metadata.images[0]}
          alt={post.metadata.title}
          className={styles.coverImage}
        />
      )}

      <article className={styles.content}>
        <CustomMDX source={post.content} />
      </article>

      <ScrollToHash />
    </div>
  );
}

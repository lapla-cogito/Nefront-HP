import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { loadNum } from './constants';

const postsDirectory = path.join(process.cwd(), 'news');

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

const listDirectoryFiles = () =>
    fs
        .readdirSync(postsDirectory, { withFileTypes: true })
        .flatMap((dirent) =>
            dirent.isFile() ? [`${dirent.name}`] : listFilesRecursively(`${dirent.name}`)
        );

const listFilesRecursively = (dir: string): string[] =>
    fs
        .readdirSync(path.join(postsDirectory, dir), { withFileTypes: true })
        .flatMap((dirent) =>
            dirent.isFile()
                ? [`${dir}/${dirent.name}`]
                : listFilesRecursively(`${dir}/${dirent.name}`)
        );

export function getPostBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.toString().split(',').join('/').replace(/\.md$/, ''),
        fileName = `${realSlug}.md`,
        fullPath = path.join(postsDirectory, fileName, ''),
        fileContents = fs.readFileSync(fullPath, 'utf8'),
        { data, content } = matter(fileContents);

    type Items = {
        [key: string]: string;
    };

    const items: Items = {};

    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllPosts(fields: string[] = []) {
    const slugs = listDirectoryFiles();
    console.log(slugs);
    const posts = slugs
        .filter((slug) => slug.match(/\.md$/))
        .map((slug) => getPostBySlug(slug, fields))
        .sort(function (post1, post2) {
            const post1date: string[] = post1.date?.split('-'),
                post2date: string[] = post2.date?.split('-');

            if (typeof post1date === 'undefined' || typeof post2date === 'undefined') {
                return -1;
            }

            for (let i = 1; i < 3; ++i) {
                if (post1date[i].length == 1) {
                    post1date[i] = '0' + post1date[i];
                }
                if (post2date[i].length == 1) {
                    post2date[i] = '0' + post2date[i];
                }
            }

            const date1 = post1date.join('-'),
                date2 = post2date.join('-');

            return date1 > date2 ? -1 : 1;
        });
    return { postArray: posts };
}

export function getNewPosts(fields: string[] = []) {
    const posts = getAllPosts(fields);

    if (posts.postArray.length < loadNum) {
        return { postArray: posts.postArray, postsLength: posts.postArray.length };
    }

    return {
        postArray: posts.postArray.slice(0, loadNum),
        postsLength: posts.postArray.length,
    };
}

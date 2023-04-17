import git from "isomorphic-git";
import fs from "fs";

export async function lastUpdateDate(filepath: string): Promise<Date | null> {
    let lastUpdated: Date = null;

    try {
        const commitInfo = await git.log({
            fs,
            dir: process.cwd(),
            filepath,
        });

        if (commitInfo.length) {
            lastUpdated = new Date(commitInfo[0].commit.author.timestamp * 1000);
        }
    } catch (_) { }

    return lastUpdated
}

export async function pubDate(filepath: string): Promise<Date | null> {
    let published: Date = null;
    
    
    try {
        const commitInfo = await git.log({
            fs,
            dir: process.cwd(),
            filepath,
        });

        if (commitInfo.length) {
            published = new Date(commitInfo[commitInfo.length - 1].commit.author.timestamp * 1000);
        }
    } catch (_) { }

    return published
}
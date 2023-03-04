import { Octokit } from "@octokit/rest";
const octokit = new Octokit()

export const getPublicGists = () => octokit.rest.gists.listPublic()

export const getGistForUser = username =>  octokit.rest.gists.listForUser({ username });
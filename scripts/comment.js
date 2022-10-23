// eslint-disable-next-line @typescript-eslint/no-var-requires
const core = require('@actions/core');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const github = require('@actions/github');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { context } = require('@actions/github');
const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
const octokit = github.getOctokit(GITHUB_TOKEN);

console.log('context', context);

const { pull_request } = context.payload;

async function run() {
  await octokit.rest.issues.createComment({
    ...context.repo,
    issue_number: pull_request.number,
    body: 'Holy Schmoly! This is a pr!',
  });
}

run();

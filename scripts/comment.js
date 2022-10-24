// eslint-disable-next-line @typescript-eslint/no-var-requires
const core = require('@actions/core');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const github = require('@actions/github');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { context } = require('@actions/github');
const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
const BUCKET_NAME = core.getInput('BUCKET_NAME');
const BUILD_VERSION = core.getInput('BUILD_VERSION');
const octokit = github.getOctokit(GITHUB_TOKEN);

const { pull_request } = context.payload;

const previewBotStartLine = '<!-- preview-bot-start -->';

async function getPreviousComment() {
  const comments = await octokit.rest.issues.listComments({
    ...context.repo,
    issue_number: pull_request.number,
  });

  const previousComment = comments.data.find(({ body }) =>
    body.startsWith(previewBotStartLine)
  );

  return previousComment;
}

function getRandomStartLine() {
  const lines = [
    "Holy Macaroni! 🍝, It's a preview!",
    "To the moon! 🚀, It's a preview!",
    "I'm a teapot! 🫖, Let me pour you a preview!",
    "I'm a banana! 🍌, And this is a preview for scale!",
    "I'm a pineapple! 🍍, ... preview?",
    'I love a pizza party! 🍕, How about a preview party?!',
    'Tim approves of these messages! 🕐, Time for your preview!',
  ];

  return lines[Math.floor(Math.random() * lines.length)];
}

function generateLink() {
  return `[Preview-${BUILD_VERSION}](http://${BUCKET_NAME}.s3-website-ap-southeast-2.amazonaws.com/${BUILD_VERSION}/index.html)`;
}

async function run() {
  const comment = await getPreviousComment();

  if (comment) {
    await octokit.rest.issues.updateComment({
      ...context.repo,
      comment_id: comment.id,
      body: `${comment.body}\n${generateLink()}`,
    });
    return;
  }
  await octokit.rest.issues.createComment({
    ...context.repo,
    issue_number: pull_request.number,
    body: `${previewBotStartLine}\n${getRandomStartLine()}\n\n${generateLink()}`,
  });
}

run();

module.exports = {
  // Base application title used in document.title
  title: process.env.Title || 'CLT Melee Ranked Slippi Leaderboard',

  // use cname option to add CNAME file to webpack build
  // CNAME file allows to use custom domain names with gh-pages, example:
  // cname: 'omatsuri.app'
  cname: null,

  // add repo path for username.github.io/repoPath for react router to recognize paths,
  // use only when deployed to github.io, leave as null for deployments with custom domains
  repoPath: 'https://bot-matt.github.io/CLTSlippiLeaderboard/',

  // Google sheets ID for player connect codes.
  // https://docs.google.com/spreadsheets/d/[YOUR ID]
  spreadsheetID: process.env.Spreadsheet || '1ArLXLTWhz9tW5x8vN3hPQJP-yNY2RrusUY0dGXWKsZk',
};

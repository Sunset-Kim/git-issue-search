import { RepositoryContextProvider } from '@/feature/repository';
import { render, screen } from '@testing-library/react';
import 'jest';
import { Issue } from '../../schema';
import { IssueItem } from '../issue-item.component';

const MOCK_ISSUE: Issue & {
  repositoryName: string;
  [key: string]: any;
} = {
  url: 'https://api.github.com/repos/microsoft/TypeScript/issues/52802',
  repository_url: 'https://api.github.com/repos/microsoft/TypeScript',
  labels_url:
    'https://api.github.com/repos/microsoft/TypeScript/issues/52802/labels{/name}',
  comments_url:
    'https://api.github.com/repos/microsoft/TypeScript/issues/52802/comments',
  events_url:
    'https://api.github.com/repos/microsoft/TypeScript/issues/52802/events',
  html_url: 'https://github.com/microsoft/TypeScript/issues/52802',
  id: 1587705601,
  node_id: 'I_kwDOAT9aAc5eoncB',
  number: 52802,
  title:
    "path completion doesn't suggest non-relative files under path alias if no baseUrl config",
  user: {
    login: 'jasonlyu123',
    id: 36730922,
    node_id: 'MDQ6VXNlcjM2NzMwOTIy',
    avatar_url: 'https://avatars.githubusercontent.com/u/36730922?v=4',

    html_url: 'https://github.com/jasonlyu123',

    starred_url:
      'https://api.github.com/users/jasonlyu123/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/jasonlyu123/subscriptions',
    organizations_url: 'https://api.github.com/users/jasonlyu123/orgs',
    repos_url: 'https://api.github.com/users/jasonlyu123/repos',
    events_url: 'https://api.github.com/users/jasonlyu123/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/jasonlyu123/received_events',
    type: 'User',
    site_admin: false,
  },
  labels: [],
  state: 'open',
  locked: false,
  assignee: null,
  assignees: [],
  milestone: null,
  comments: 0,
  created_at: '2023-02-16T13:45:00Z',
  updated_at: '2023-02-16T13:45:00Z',
  closed_at: null,
  author_association: 'CONTRIBUTOR',
  active_lock_reason: null,
  body: '# Bug Report\r\n\r\n<!--\r\n  Please fill in each section completely. Thank you!\r\n-->\r\n\r\n### 🔎 Search Terms\r\nimport path completion\r\npath completion\r\nbaseUrl\r\n\r\n<!--\r\n  What search terms did you use when trying to find an existing bug report?\r\n  List them here so people in the future can find this one more easily.\r\n-->\r\nimport completion\r\n\r\n### 🕗 Version & Regression Information\r\n\r\n<!-- When did you start seeing this bug occur?\r\n\r\n"Bugs" that have existed in TS for a long time are very likely to be FAQs; refer to\r\n  https://github.com/Microsoft/TypeScript/wiki/FAQ#common-bugs-that-arent-bugs\r\n\r\nIf possible, please try testing the nightly version of TS to see if it\'s already been fixed.\r\nFor npm: `typescript@next`\r\nThis is also the \'Nightly\' version in the playground: http://www.typescriptlang.org/play/?ts=Nightly\r\n\r\nNote: The TypeScript Playground can be used to try older versions of TypeScript.\r\n\r\nPlease keep and fill in the line that best applies:\r\n-->\r\n- This is the behavior in every version I tried, and I reviewed the FAQ, and none seems to apply.\r\n\r\n\r\n### ⏯ Playground Link\r\n\r\n<!--\r\n  A link to a TypeScript Playground "Share" link which shows this behavior\r\n\r\n  The TypeScript Workbench can be used for more complex setups, try\r\n  https://www.typescriptlang.org/dev/bug-workbench/\r\n\r\n  As a last resort, you can link to a repo, but these will be slower for us to investigate.\r\n-->\r\nThe Bug WorkBench doesn\'t seem to support the `paths` compiler option. When I use the `@paths` comment, it throws an error. So I created a repository https://github.com/jasonlyu123/import-path-completion-repo\r\n\r\n### 💻 Code\r\n\r\n<!-- Please post the relevant code sample here as well-->\r\n\r\ntsconfig.json\r\n\r\n```json\r\n{\r\n  "compilerOptions": {\r\n\t"paths": {\r\n  \t    "@/*": ["./*"]\r\n\t}\r\n  }\r\n}\r\n\r\n```\r\n\r\n```ts\r\n// @filename: foo.ts\r\nexport {}\r\n\r\n// @filename: index.ts\r\nimport {} from \'@/\' // trigger completion here. after \'/\'\r\n```\r\n\r\n### 🙁 Actual behavior\r\n\r\nNo completion.\r\n\r\n### 🙂 Expected behavior\r\n\r\nshow `foo` for `foo.ts` like when you have `"baseUrl": "." `\r\n\r\nThis seems to be because previously, the `paths` config was only allowed when `baseUrl` was set. And the completion isn\'t updated to support this setup.\r\n',
  reactions: {
    url: 'https://api.github.com/repos/microsoft/TypeScript/issues/52802/reactions',
    total_count: 0,
    '+1': 0,
    '-1': 0,
    laugh: 0,
    hooray: 0,
    confused: 0,
    heart: 0,
    rocket: 0,
    eyes: 0,
  },
  timeline_url:
    'https://api.github.com/repos/microsoft/TypeScript/issues/52802/timeline',
  performed_via_github_app: null,
  state_reason: null,
  repositoryName: 'microsoft/TypeScript',
};

describe('IssueItem', () => {
  it('issue의 제목, Repository 명은 필수로 표현되어야 한다', () => {
    render(
      <RepositoryContextProvider>
        <IssueItem issue={MOCK_ISSUE} />
      </RepositoryContextProvider>
    );

    expect(screen.getByText(MOCK_ISSUE.repositoryName)).toBeInTheDocument();
    expect(screen.getByText(MOCK_ISSUE.title)).toBeInTheDocument();
  });
});

import { Component } from '@angular/core';

@Component({
  selector: 'app-git-qa',
  standalone: true,
  imports: [],
  templateUrl: './git-qa.component.html',
  styleUrl: './git-qa.component.css'
})
export class GitQaComponent {
  selectedIndex: number | null = null;
  qaList = [
    {
      category: 'Git',
      question: 'What is Git?',
      answer: `Git is a distributed version control system that tracks changes in source code, allowing multiple developers to collaborate efficiently.`
    },
    {
      category: 'Git',
      question: 'Difference between Git and GitHub?',
      answer: `Git → Version control system (local & distributed).
              GitHub → Cloud-based platform to host Git repositories and collaborate online`
    },
    {
      category: 'Git',
      question: 'What is a branch in Git?',
      answer: `A branch is a parallel version of the code. It allows development without affecting the main branch (main/master).`
    },
    {
      category: 'Git',
      question: 'What is git clone?',
      answer: `git clone <repo-url> creates a local copy of a remote repository.`
    },
    {
      category: 'Git',
      question: 'Difference between git pull and git fetch',
      answer: `git fetch → Fetches changes from remote but does not merge.
              git pull → Fetches and merges changes into the current branch`
    },
    {
      category: 'Git',
      question: 'How to create a new branch and switch?',
      answer: `git checkout -b feature-branch`
    },
    {
      category: 'Git',
      question: 'How to merge a branch?',
      answer: `git checkout main.
              git merge feature-branch`
    },
    {
      category: 'Git',
      question: 'What is git rebase?',
      answer: `git rebase moves or reapplies commits from one branch onto another, keeping a clean linear history.`
    },
    {
      category: 'Git',
      question: 'How to resolve merge conflicts?',
      answer: `Open conflicting files → edit manually → mark as resolved`
    },
    {
      category: 'Git',
      question: 'What is git stash?',
      answer: `Temporarily saves uncommitted changes so you can work on something else.`
    },
    {
      category: 'Git',
      question: 'Difference between git reset and git revert',
      answer: `git reset - Moves HEAD to a previous commit (changes history). git revert - Creates a new commit to undo changes (safe for shared repos)`
    },
    {
      category: 'Git',
      question: 'How to see commit history?',
      answer: `git log --oneline`
    },
    {
      category: 'Git',
      question: 'How to undo last commit but keep changes?',
      answer: `git reset --soft HEAD~1`
    },
    {
      category: 'Git',
      question: 'How to delete a branch?',
      answer: `git branch -d feature-branch,
              git push origin --delete feature-branch.`
    },
    {
      category: 'Git',
      question: 'What is git tag?',
      answer: `Tags are snapshots of the repository at a specific commit, usually for releases.`
    },
  ];

  toggleAnswer(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}




/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Intro",
    },
    {
      type: "doc",
      id: "mistho-app",
      label: "Mistho APP",
    },
    {
      type: "doc",
      id: "scoping",
      label: "Scoping",
    },
    {
      type: "doc",
      id: "implementation",
      label: "Implementation",
    },
    {
      type: "doc",
      id: "authentication",
      label: "Authentication",
    },
    {
      type: "doc",
      id: "data-points-uk",
      label: "Data Points (UK)",
    },
    {
      type: "doc",
      id: "data-points-universal-credit-uk",
      label: "Data Points Universal Credit (UK)",
    },
    {
      type: "category",
      label: "Transactions",
      link: {
        type: "doc",
        id: "transactions/transactions"
      },
      items: [
        {
          type: "doc",
          id: "transactions/create-transaction",
          label: "Create Transaction",
        },
        {
          type: "doc",
          id: "transactions/get-transactions",
          label: "GET Transactions",
        },
        {
          type: "doc",
          id: "transactions/get-transaction-by-id",
          label: "Get Transaction by ID",
        },
        {
          type: "doc",
          id: "transactions/delete-transaction",
          label: "Delete Transaction",
        },
      ],
    },
    {
      type: "category",
      label: "Configurations",
      link: {
        type: "doc",
        id: "configurations/configurations"
      },
      items: [
        {
          type: "doc",
          id: "configurations/create-configuration",
          label: "Create Configuration",
        },
        {
          type: "doc",
          id: "configurations/get-configurations",
          label: "Get Configurations",
        },
        {
          type: "doc",
          id: "configurations/get-configurations-by-id",
          label: "Get Configurations by ID",
        },
        {
          type: "doc",
          id: "configurations/update-configuration",
          label: "Update Configuration",
        },
        {
          type: "doc",
          id: "configurations/delete-configuration",
          label: "Delete Configuration",
        },
      ],
    },
  ],
};

module.exports = sidebars;

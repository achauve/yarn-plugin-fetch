const {BaseCommand} = require('@yarnpkg/cli')
const expandLock = require('../lib/expand-lock')

module.exports = class ExpandLockCommand extends BaseCommand {
  static paths = [
    ["expand-lock"],
  ];

  async execute() {
    expandLock(this)
  }
}

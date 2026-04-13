# Adding Tools

A fresh group is an empty space. You make it useful by **adding tools**. Tools are the apps you run *inside* a group — chat, documents, task boards, calendars, and so on.

> 🚧 Screenshots coming soon.

## The Tool Library

Moss ships with one or more **Tool Libraries** — curated collections of tools you can browse and install. Any member of the group can install a tool from a library the group has access to.

## Installing a tool

1. Open the group.
2. Click **Add Tool** (or the equivalent "+" in the group's tool bar).
3. Browse the library and pick a tool.
4. Give the instance a **name**. You can have multiple instances of the same tool in a group — e.g. two separate KanBan boards — and each gets its own name.
5. Install. Moss sets up the tool's network and UI for this group.

## How tool instances work

- **Each tool instance is its own private peer-to-peer network**, scoped to this group.
- **Members of the group can join tool instances.** When someone else installs a tool that already exists in the group, they can join the existing instance rather than creating a new one.
- **Uninstalling a tool removes it from your device.** Other members' copies are unaffected.

## Composing tools

This is where the Weave Interaction Pattern earns its keep: tools can **link to each other's content**. A chat message can reference a specific document. A task card can point at a calendar event. A dashboard can embed blocks from multiple tools.

Not every tool supports every kind of link. What's possible depends on the tools the group has installed and what they expose.

## Updating tools

Tools have their own versions. When a new version of a tool is published, the group can choose to update. Updates are coordinated so that members stay compatible with each other.

## Next

You now have the basics: a group, members, and tools. Explore the [developer documentation](https://lightningrodlabs.github.io/moss/) if you want to build your own tool, or check [moss.social](https://moss.social) for news and community.

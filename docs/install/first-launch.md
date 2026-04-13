# First Launch

The first time you open Moss, it sets up a local **profile** on your machine. The profile holds your groups, your installed tools, and your cryptographic keys.

> 🚧 Screenshots coming soon.

## What happens on first launch

1. **Moss starts its local conductor.** Behind the scenes Moss launches a Holochain conductor and a keystore (lair) on your machine. These run as long as Moss is open.
2. **You create a profile.** A profile is local to this device. Nothing is sent to any server.
3. **You land on the home screen.** From here you can create your first group, or join a group using an invite link someone has sent you.

## Where your data lives

Moss stores everything in your user config directory:

- **macOS:** `~/Library/Application Support/Moss/profiles/<profile-name>/`
- **Linux:** `~/.config/Moss/profiles/<profile-name>/`
- **Windows:** `%APPDATA%\Moss\profiles\<profile-name>\`

You can have multiple profiles on the same machine (useful for keeping different identities separate). The first one is created for you automatically.

## Next step

- [Create your first group](../groups-and-tools/creating-a-group), or
- Accept an invite from someone else (see [Inviting Members](../groups-and-tools/inviting-members) for how invites work).

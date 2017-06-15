# TODO SMS

A check list app for text messaging.

## Usage

Welcome to the SMS Todo List!!!

This is a simple check list that you can
manage from your phone.

If you want to add a note simple text to 844-295-1836

add [note]

If you want to see all of your items text to 844-295-1836

ls

If you want to mark an item complete text

check [item number]

If you want to remove an item text

rm [item number]

## Development

The application contains all commands in the cmds folder, and manages state via the store.js file in the lib folder.

When a message is received, it is parsed then
passed to the commands handler and processed.

The returned result is then sent to the caller
via the lib/sms library.

### Environment Variables

Twilio

SID
TOKEN

Couchdb Database URL

DB

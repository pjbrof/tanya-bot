# Discord Bot

## Ping Pong Easiest Example

```tsx
client.on("messageCreate", (message) => {
  if (message.content == "ping") {
    console.log(message);
    message.channel.send("pong!");
  }
});
```

## Message a user

```tsx
client.once(Events.ClientReady, (readyClient) => {
  message.users.send(process.env.USER_ID, "Bro");
}
```

## Message to channel

```tsx
client.once(Events.ClientReady, (readyClient) => {
  console.log(readyClient);

  console.log("client.guilds", client.guilds.cache);
  const guild = client.guilds.cache.get("1223733341602320438");

  console.log(client.users.cache);
  const channel = guild.channels.cache.get("1223733342889836695");
  channel.send("Your message");
}
```

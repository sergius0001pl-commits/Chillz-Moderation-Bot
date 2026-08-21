// =========================
// COMMAND BEHAVIOR
// =========================
commands: {
  // Bot owner IDs.
  owners:
    process.env.OWNER_IDS
      ?.split(",")
      .map((id) => id.trim())
      .filter(Boolean) || [],

  // Staff role ID.
  // Railway variable:
  // MODERATOR_ROLE_ID=YOUR_STAFF_ROLE_ID
  moderatorRoleId:
    process.env.MODERATOR_ROLE_ID || "",

  // =========================
  // REMOVED COMMANDS
  // =========================
  // These commands should not be registered.
  disabledCommands: [
    "balance",
    "buy",
    "calculate",
    "countdown",
    "crime",
    "daily",
    "deposit",
    "leaderboard",
    "fight",
    "firstmsg",
    "fish",
    "flip",
    "gamble",
    "hexcolor",
    "inventory",
    "join",
    "mine",

    // Music
    "play",
    "pause",
    "resume",
    "stop",
    "skip",
    "queue",
    "shuffle",
    "loop",
    "volume",
    "disconnect",
    "leave",
    "seek",
    "nowplaying",
    "music",

    "pay",
    "ping",
    "randomuser",
    "rob",
    "roll",
    "search",
    "define",
    "google",
    "urban",
    "unixtime",
  ],

  // Verification is NOT disabled.
  // It remains available to staff only.

  defaultCooldown: 3,

  deleteCommands: false,

  testGuildId:
    process.env.TEST_GUILD_ID,

  maintenanceMode:
    process.env.MAINTENANCE_MODE === "true",

  prefix:
    process.env.PREFIX || "!",
},

// =========================
// FEATURE TOGGLES
// =========================
features: {
  // Economy commands such as balance, buy,
  // crime, daily, deposit, fish, gamble, etc.
  economy: false,

  leveling: true,

  moderation: true,

  logging: true,

  welcome: true,

  tickets: true,

  giveaways: true,

  birthday: true,

  counter: true,

  // Verification stays ENABLED.
  // Access is restricted separately below.
  verification: true,

  reactionRoles: true,

  joinToCreate: true,

  voice: true,

  // Search-related feature disabled.
  search: false,

  tools: true,

  utility: true,

  community: true,

  fun: true,

  // ALL music functionality disabled.
  music: false,
},

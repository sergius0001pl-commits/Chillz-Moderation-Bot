import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // BOT PRESENCE
  // =========================
  presence: {
    status: "online",

    activities: [
      {
        name: "Custom Status",
        state: "stalking",
        type: 4,
      },
    ],
  },

  // =========================
  // COMMAND BEHAVIOR
  // =========================
  commands: {
    // Your Discord user ID(s), separated by commas.
    owners:
      process.env.OWNER_IDS
        ?.split(",")
        .map((id) => id.trim())
        .filter(Boolean) || [],

    // Your STAFF role ID.
    // Add this to Railway:
    //
    // MODERATOR_ROLE_ID=123456789
    //
    moderatorRoleId:
      process.env.MODERATOR_ROLE_ID || "",

    // =====================================
    // COMMANDS TO REMOVE FROM REGISTRATION
    // =====================================
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

      // ALL MUSIC COMMANDS
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

    // Verification is NOT deleted.
    // It is STAFF ONLY.
    staffOnlyCategories: [
      "verification",
    ],

    defaultCooldown: 3,

    // Old commands need to be removable when commands
    // are re-registered.
    deleteCommands: true,

    testGuildId:
      process.env.TEST_GUILD_ID,

    maintenanceMode:
      process.env.MAINTENANCE_MODE === "true",

    prefix:
      process.env.PREFIX || "!",
  },

  // =========================
  // APPLICATIONS
  // =========================
  applications: {
    defaultQuestions: [
      {
        question: "What is your name?",
        required: true,
      },
      {
        question: "How old are you?",
        required: true,
      },
      {
        question: "Why do you want to join?",
        required: true,
      },
    ],

    statusColors: {
      pending: "#FFA500",
      approved: "#00FF00",
      denied: "#FF0000",
    },

    applicationCooldown: 24,
    deleteDeniedAfter: 7,
    deleteApprovedAfter: 30,

    managerRoles: [],
  },

  // =========================
  // EMBEDS
  // =========================
  embeds: {
    colors: {
      primary: "#336699",
      secondary: "#2F3136",

      success: "#57F287",
      error: "#ED4245",
      warning: "#FEE75C",
      info: "#3498DB",

      light: "#FFFFFF",
      dark: "#202225",
      gray: "#99AAB5",

      blurple: "#5865F2",
      green: "#57F287",
      yellow: "#FEE75C",
      fuchsia: "#EB459E",
      red: "#ED4245",
      black: "#000000",

      giveaway: {
        active: "#57F287",
        ended: "#ED4245",
      },

      ticket: {
        open: "#57F287",
        claimed: "#FAA61A",
        closed: "#ED4245",
        pending: "#99AAB5",
      },

      economy: "#F1C40F",
      birthday: "#E91E63",
      moderation: "#9B59B6",

      priority: {
        none: "#95A5A6",
        low: "#3498db",
        medium: "#2ecc71",
        high: "#f1c40f",
        urgent: "#e74c3c",
      },
    },

    footer: {
      text: "Titan Bot",
      icon: null,
    },

    thumbnail: null,

    author: {
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // ECONOMY
  // =========================
  // KEEPING THIS ENABLED because you asked to
  // DELETE specific commands, NOT disable economy.
  economy: {
    currency: {
      name: "coins",
      namePlural: "coins",
      symbol: "$",
    },

    startingBalance: 0,
    baseBankCapacity: 100000,

    dailyAmount: 100,

    workMin: 10,
    workMax: 100,

    begMin: 5,
    begMax: 50,

    cooldowns: {
      daily: 24 * 60 * 60 * 1000,
      work: 60 * 60 * 1000,
      crime: 2 * 60 * 60 * 1000,
      rob: 4 * 60 * 60 * 1000,
    },

    robSuccessRate: 0.4,

    robFailJailTime: 3600000,
  },

  // =========================
  // SHOP
  // =========================
  shop: {},

  // =========================
  // TICKETS
  // =========================
  tickets: {
    defaultCategory: null,

    supportRoles: [],

    priorities: {
      none: {
        emoji: "⚪",
        color: "#95A5A6",
        label: "None",
      },

      low: {
        emoji: "🟢",
        color: "#2ECC71",
        label: "Low",
      },

      medium: {
        emoji: "🟡",
        color: "#F1C40F",
        label: "Medium",
      },

      high: {
        emoji: "🔴",
        color: "#E74C3C",
        label: "High",
      },

      urgent: {
        emoji: "🚨",
        color: "#E91E63",
        label: "Urgent",
      },
    },

    defaultPriority: "none",

    archiveCategory: null,

    logChannel: null,
  },

  // =========================
  // GIVEAWAYS
  // =========================
  giveaways: {
    defaultDuration: 86400000,

    minimumWinners: 1,
    maximumWinners: 10,

    minimumDuration: 300000,
    maximumDuration: 2592000000,

    allowedRoles: [],
    bypassRoles: [],
  },

  // =========================
  // BIRTHDAY
  // =========================
  birthday: {
    defaultRole: null,

    announcementChannel: null,

    timezone: "UTC",
  },

  // =========================
  // VERIFICATION
  // =========================
  // KEEP ENABLED.
  //
  // The command loader/handler must use:
  // staffOnlyCategories: ["verification"]
  //
  // so normal members cannot access the verification
  // setup commands.
  verification: {
    defaultMessage:
      "Click the button below to verify yourself and gain access to the server!",

    defaultButtonText: "Verify",

    autoVerify: {
      defaultCriteria: "none",

      defaultAccountAgeDays: 7,

      serverSizeThreshold: 1000,

      minAccountAge: 1,
      maxAccountAge: 365,

      sendDMNotification: true,

      criteria: {
        account_age:
          "Account must be older than specified days",

        server_size:
          "All users if server has less than 1000 members",

        none:
          "All users immediately",
      },
    },

    verificationCooldown: 5000,

    maxVerificationAttempts: 3,

    attemptWindow: 60000,

    maxCooldownEntries: 10000,

    maxAttemptEntries: 10000,

    cooldownCleanupInterval: 300000,

    maxAuditMetadataBytes: 4096,

    maxInMemoryAuditEntries: 1000,

    logAllVerifications: true,

    keepAuditTrail: true,
  },

  // =========================
  // WELCOME
  // =========================
  welcome: {
    defaultWelcomeMessage:
      "Welcome {user} to {server}! We now have {memberCount} members!",

    defaultGoodbyeMessage:
      "{user} has left the server. We now have {memberCount} members.",

    defaultWelcomeChannel: null,

    defaultGoodbyeChannel: null,
  },

  // =========================
  // COUNTERS
  // =========================
  counters: {
    defaults: {
      name: "{name} Counter",

      description:
        "Server {name} counter",

      type: "voice",

      channelName:
        "{name}-{count}",
    },

    permissions: {
      deny: [
        "VIEW_CHANNEL",
      ],

      allow: [
        "VIEW_CHANNEL",
        "CONNECT",
        "SPEAK",
      ],
    },

    messages: {
      created:
        "✅ Created counter **{name}**",

      deleted:
        "🗑️ Deleted counter **{name}**",

      updated:
        "🔄 Updated counter **{name}**",
    },

    types: {
      members: {
        name: "👥 Members",

        description:
          "Total members in the server",

        getCount: (guild) =>
          guild.memberCount.toString(),
      },

      bots: {
        name: "🤖 Bots",

        description:
          "Total bot accounts in the server",

        getCount: (guild) =>
          guild.members.cache
            .filter((m) => m.user.bot)
            .size
            .toString(),
      },

      members_only: {
        name: "👤 Humans",

        description:
          "Total human members (non-bots)",

        getCount: (guild) =>
          guild.members.cache
            .filter((m) => !m.user.bot)
            .size
            .toString(),
      },
    },
  },

  // =========================
  // MESSAGES
  // =========================
  messages: {
    noPermission:
      "You do not have permission to use this command.",

    cooldownActive:
      "Please wait {time} before using this command again.",

    errorOccurred:
      "An error occurred while executing this command.",

    missingPermissions:
      "I am missing required permissions to perform this action.",

    commandDisabled:
      "This command has been removed.",

    maintenanceMode:
      "The bot is currently in maintenance mode.",
  },

  // =========================
  // FEATURES
  // =========================
  features: {
    economy: true,

    leveling: true,

    moderation: true,

    logging: true,

    welcome: true,

    tickets: true,

    giveaways: true,

    birthday: true,

    counter: true,

    // Verification stays ON.
    verification: true,

    reactionRoles: true,

    joinToCreate: true,

    voice: true,

    // Search can remain enabled for any commands
    // you haven't removed.
    search: true,

    tools: true,

    utility: true,

    community: true,

    fun: true,

    // Music commands are being removed.
    music: false,
  },
};

// =========================
// COMMAND CATEGORY → FEATURE
// =========================

const COMMAND_CATEGORY_FEATURE_MAP = {
  birthday: "birthday",
  community: "community",
  economy: "economy",
  fun: "fun",
  giveaway: "giveaways",
  jointocreate: "joinToCreate",
  leveling: "leveling",
  logging: "logging",
  moderation: "moderation",
  music: "music",
  reaction_roles: "reactionRoles",
  search: "search",
  serverstats: "counter",
  ticket: "tickets",
  tools: "tools",
  utility: "utility",
  verification: "verification",
  welcome: "welcome",
};

// =========================
// HELPERS
// =========================

function normalizeCategoryKey(category) {
  return String(category || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
}

export function getCommandPrefix() {
  return botConfig.commands?.prefix ?? "!";
}

export function getBotOwners() {
  return (
    botConfig.commands?.owners ?? []
  )
    .map((id) => String(id).trim())
    .filter(Boolean);
}

export function isBotOwner(userId) {
  if (!userId) {
    return false;
  }

  return getBotOwners().includes(
    String(userId)
  );
}

// =========================
// STAFF CHECK
// =========================

export function isStaff(member) {
  if (!member) {
    return false;
  }

  const staffRoleId =
    botConfig.commands?.moderatorRoleId;

  if (!staffRoleId) {
    return false;
  }

  return (
    member.roles?.cache?.has(
      staffRoleId
    ) === true
  );
}

// =========================
// REMOVED COMMAND CHECK
// =========================

export function isCommandDisabled(commandName) {
  if (!commandName) {
    return false;
  }

  return (
    botConfig.commands?.disabledCommands?.includes(
      String(commandName).toLowerCase()
    ) === true
  );
}

// =========================
// VERIFICATION CHECK
// =========================

export function canUseVerification(interaction) {
  if (!interaction?.user) {
    return false;
  }

  // Owner can always use verification.
  if (
    isBotOwner(
      interaction.user.id
    )
  ) {
    return true;
  }

  // Only staff can use verification.
  return isStaff(
    interaction.member
  );
}

// =========================
// COMMAND CHECK
// =========================

export function canUseCommand(interaction) {
  if (!interaction?.user) {
    return false;
  }

  const commandName =
    String(
      interaction.commandName || ""
    ).toLowerCase();

  // Owner has full access.
  if (
    isBotOwner(
      interaction.user.id
    )
  ) {
    return true;
  }

  // Deleted commands cannot be used.
  if (
    isCommandDisabled(
      commandName
    )
  ) {
    return false;
  }

  // Verification is staff-only.
  const category =
    normalizeCategoryKey(
      interaction.command?.category
    );

  if (
    botConfig.commands.staffOnlyCategories.includes(
      category
    )
  ) {
    return isStaff(
      interaction.member
    );
  }

  // Staff can use everything that remains.
  if (
    isStaff(
      interaction.member
    )
  ) {
    return true;
  }

  return true;
}

// =========================
// MAINTENANCE
// =========================

export function isMaintenanceMode() {
  return (
    botConfig.commands
      ?.maintenanceMode === true
  );
}

// =========================
// MESSAGES
// =========================

export function getBotMessage(
  key,
  replacements = {}
) {
  let message =
    botConfig.messages?.[key] ||
    key;

  for (
    const [placeholder, value]
    of Object.entries(replacements)
  ) {
    message = message.replace(
      new RegExp(
        `\\{${placeholder}\\}`,
        "g"
      ),
      String(value)
    );
  }

  return message;
}

// =========================
// FEATURES
// =========================

export function isFeatureEnabled(
  featureKey
) {
  if (!featureKey) {
    return true;
  }

  return (
    botConfig.features?.[
      featureKey
    ] !== false
  );
}

export function isCommandCategoryEnabled(
  category
) {
  const normalized =
    normalizeCategoryKey(
      category
    );

  if (
    !normalized ||
    normalized === "core"
  ) {
    return true;
  }

  const featureKey =
    COMMAND_CATEGORY_FEATURE_MAP[
      normalized
    ];

  if (!featureKey) {
    return true;
  }

  return isFeatureEnabled(
    featureKey
  );
}

// =========================
// APPLICATIONS
// =========================

export function getApplicationStatusColor(
  status
) {
  const colors =
    botConfig.applications
      ?.statusColors || {};

  const hex =
    colors[status];

  return hex
    ? getColor(hex)
    : getColor(
        status === "approved"
          ? "success"
          : status === "denied"
            ? "error"
            : "warning"
      );
}

export function getDefaultApplicationQuestions() {
  return (
    botConfig.applications
      ?.defaultQuestions || []
  )
    .map((entry) =>
      typeof entry === "string"
        ? entry
        : entry.question
    )
    .filter(Boolean);
}

// =========================
// COLORS
// =========================

export function getColor(
  path,
  fallback = "#99AAB5"
) {
  if (
    typeof path === "number"
  ) {
    return path;
  }

  if (
    typeof path === "string" &&
    path.startsWith("#")
  ) {
    return parseInt(
      path.replace("#", ""),
      16
    );
  }

  const result =
    path
      .split(".")
      .reduce(
        (obj, key) =>
          obj &&
          obj[key] !== undefined
            ? obj[key]
            : fallback,
        botConfig.embeds.colors
      );

  if (
    typeof result === "string" &&
    result.startsWith("#")
  ) {
    return parseInt(
      result.replace("#", ""),
      16
    );
  }

  return result;
}

export function getRandomColor() {
  const colors =
    Object.values(
      botConfig.embeds.colors
    ).flatMap((color) =>
      typeof color === "string"
        ? color
        : Object.values(color)
    );

  return colors[
    Math.floor(
      Math.random() *
      colors.length
    )
  ];
}

// =========================
// CONFIG VALIDATION
// =========================

export function validateConfig(config) {
  const errors = [];

  if (
    process.env.NODE_ENV !==
    "production"
  ) {
    logger.debug(
      "Environment variables check:"
    );

    logger.debug(
      "DISCORD_TOKEN exists:",
      !!process.env.DISCORD_TOKEN
    );

    logger.debug(
      "TOKEN exists:",
      !!process.env.TOKEN
    );

    logger.debug(
      "CLIENT_ID exists:",
      !!process.env.CLIENT_ID
    );

    logger.debug(
      "GUILD_ID exists:",
      !!process.env.GUILD_ID
    );

    logger.debug(
      "POSTGRES_HOST exists:",
      !!process.env.POSTGRES_HOST
    );

    logger.debug(
      "NODE_ENV:",
      process.env.NODE_ENV
    );
  }

  if (
    !process.env.DISCORD_TOKEN &&
    !process.env.TOKEN
  ) {
    errors.push(
      "Bot token is required (DISCORD_TOKEN or TOKEN environment variable)"
    );
  }

  if (
    !process.env.CLIENT_ID
  ) {
    errors.push(
      "Client ID is required (CLIENT_ID environment variable)"
    );
  }

  if (
    process.env.NODE_ENV ===
    "production"
  ) {
    const hasConnectionUrl =
      Boolean(
        process.env.POSTGRES_URL ||
        process.env.DATABASE_URL
      );

    if (!hasConnectionUrl) {
      if (
        !process.env.POSTGRES_HOST
      ) {
        errors.push(
          "PostgreSQL connection is required in production (set DATABASE_URL/POSTGRES_URL, or POSTGRES_HOST)"
        );
      }

      if (
        !process.env.POSTGRES_USER
      ) {
        errors.push(
          "PostgreSQL user is required in production (set DATABASE_URL/POSTGRES_URL, or POSTGRES_USER)"
        );
      }

      if (
        !process.env.POSTGRES_PASSWORD
      ) {
        errors.push(
          "PostgreSQL password is required in production (set DATABASE_URL/POSTGRES_URL, or POSTGRES_PASSWORD)"
        );
      }
    }
  }

  return errors;
}

// =========================
// STARTUP VALIDATION
// =========================

const configErrors =
  validateConfig(
    botConfig
  );

if (
  configErrors.length > 0
) {
  logger.error(
    "Bot configuration errors:",
    configErrors.join("\n")
  );

  if (
    process.env.NODE_ENV ===
    "production"
  ) {
    process.exit(1);
  }
}

export const BotConfig =
  botConfig;

export default botConfig;

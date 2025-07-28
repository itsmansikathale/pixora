import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    tokenIdentifier: v.string(),
    imageUrl: v.optional(v.string()),

    plan: v.union(v.literal("free"), v.literal("pro")),

    // usage tracking for plan limits

    projectsUsed: v.number(),
    //    Current project count

    exportsInThisMonth: v.number(),
    // Monthly export limit tracking

    createdAt: v.number(),
    lastActiveAt: v.number(),
  })
    .index("by_token", ["tokenIdentifier"])
    .index("by_email", ["email"])
    //   we can also go for emails over here

    .searchIndex("search_name", { searchField: "name" })
    //  for user search

    .searchIndex("search_email", { searchField: "email" }),

  projects: defineTable({
    //  basic project info
    title: v.string(),
    userId: v.id("users"),

    // Canvas dimension and states
    canvasState: v.any(),
    // Fabric.js canvas JSON(Objects, layers,etc)

    width: v.number(),
    // canvas width in pixels

    height: v.number(),
    // canvas height in pixels

    // Image pipeline - track image transformation
    originalImageUrl: v.optional(v.string()),
    currentImageUrl: v.optional(v.string()),
    thumbnailUrl: v.optional(v.string()),

    // Image kit transformation state
    activeTransformation: v.optional(v.string()),
    // current Imagekit url params

    // AI feature state - track what AI processing has been applied
    backgroundRemoved: v.optional(v.boolean()),
    // has background been removed or not

    // Organization
    folderId: v.optional(v.id("projects")),
    // optional folder organization

    // timestamps
    createdAt: v.number(),
    updatedAt: v.number(),
    // Last edit time
  })
    .index("by_user", ["userId"])
    .index("by_user_updated", ["userId", "updatedAt"])
    .index("by_folder", ["folderId"]),
  // projects in folder

  // Created table for folders

  folders: defineTable({
    name: v.string(),
    userId: v.id("users"),
    createdAt: v.number(),
  }).index("by_user", ["userId"]),
  // users folder
});

// Basic plan About our project
// - Free plan : 3 projects , 20 exports/month , basic features only
// - Pro plan : Unlimited projects/exports, including all AI features

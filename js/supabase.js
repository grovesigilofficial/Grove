console.log("supabase.js loaded");

const SUPABASE_URL = "https://fdpswvkugggkglqhupxw.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkcHN3dmt1Z2dna2dscWh1cHh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxMjQzNDEsImV4cCI6MjEwMTcwMDM0MX0.LdtBmd2eHHuAGPm6vpDvEElBWzAle8O7gPLk9xzFr-I";

window.groveClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("Grove client created:", window.groveClient);

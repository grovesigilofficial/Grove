-- =========================================
-- GROVE DATABASE MIGRATION
-- File: 001_foundation.sql
-- Date: 2026-08-06
--
-- Purpose:
-- Creates the foundation required for Grove v1.
--
-- Includes:
-- - UUID generation support
--
-- This is the first migration.
-- Run migrations in numerical order.
-- =========================================


-- Enable UUID generation

create extension if not exists "pgcrypto";

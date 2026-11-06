# Secure Intelligent Video Infrastructure

## Architecture Overview

The application uses a modular full-stack architecture.

### 1. Web Application
- Framework: Next.js
- Language: TypeScript
- Responsibilities:
  - User interface
  - Authentication
  - API endpoints
  - Video management
  - Upload authorization
  - Playback authorization

### 2. Database
- MongoDB
- Responsibilities:
  - User records
  - Video metadata
  - Upload sessions
  - Processing status
  - Playback analytics

### 3. Background Processing
- Node.js
- Redis
- BullMQ
- FFmpeg

Responsibilities:
- Video transcoding
- Thumbnail generation
- HLS packaging
- AI transcription
- Video indexing

### 4. Storage
- Local filesystem for development
- S3-compatible object storage for cloud deployment

### 5. Playback
- HLS
- HLS.js
- Signed playback authorization

## Core Processing Pipeline

Upload → Transcode → Protect → Deliver → Understand

## Architecture Principle

The Next.js application handles web requests and application logic. Independent worker processes handle long-running video and AI jobs.
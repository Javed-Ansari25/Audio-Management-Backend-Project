import { Router } from "express";
import verifyJWT from "../middlewares/auth.middleware.js";
import {
  getAudio,
  getAudioById,
  getArtistAudios,
  getCurrentUser
} from "../controller/users/user.controllers.js";

import {
  getAlbumsById,
  getPublishedAlbums,
  getAllAlbumsOfArtist
} from "../controller/Album&Playlist/album.controllers.js";

const router = Router();

// PUBLIC ROUTES (No Login Required)
router.get("/audios", getAudio);
router.get("/audios/:audioId", getAudioById);
router.get("/artists/:artistId/audios", getArtistAudios);

router.get("/albums", getPublishedAlbums);
router.get("/albums/:albumId", getAlbumsById);
router.get("/artists/:artistId/albums", getAllAlbumsOfArtist);

// PROTECTED ROUTES
router.get("/me",verifyJWT, getCurrentUser);

export default router;

// The resume PDF lives in /public so it is served from the site root (and copied into /build).
export const RESUME_FILENAME = 'Narendra_Kadiveti_Resume.pdf';
export const RESUME_URL = `${process.env.PUBLIC_URL}/${RESUME_FILENAME}`;

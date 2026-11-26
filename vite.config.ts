import { fmt, lint } from '@noeldemartin/vite-plus-config';
import { defineConfig } from 'vite-plus';

export default defineConfig({
    fmt,
    lint: { extends: [lint] },
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base so one build works both at a custom-domain root
  // (guy-catz.com/) and under GitHub project pages
  // (xarlos89.github.io/guy-catz-dot-com/). Absolute '/' paths would 404
  // under the sub-path; see CLAUDE.md → Deployment.
  base: './',
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  let base = '/';

  if (mode === 'withreg') base = '/ToDoAPIWithReg/';
  if (mode === 'redux') base = '/ToDoRedux/';
  if (mode === 'rtk') base = '/ToDoRTK/';

  return {
    plugins: [react()],
    base
  };
});

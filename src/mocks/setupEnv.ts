import { loadEnvConfig } from '@next/env'

const configureNextUseLocalTestEnv = async () => {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
}

export default configureNextUseLocalTestEnv

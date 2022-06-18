type DataStoreConfig = {
  host: string
  port: number
  username: string
  password: string
  database: string
}
export type Config = {
  mongo: DataStoreConfig
  postgres: DataStoreConfig
}

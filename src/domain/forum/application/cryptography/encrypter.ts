export abstract class Encryptere {
  abstract encrypt(payload: Record<string, unknown>): Promise<string>
}

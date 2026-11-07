import { companySettings, mockProperties, publicProperties } from './mock-data'
import type { CompanySettings, PrivateProperty, PublicProperty } from './types'
export async function getProperties(): Promise<PublicProperty[]> { return publicProperties }
export async function getPropertyById(id: string): Promise<PublicProperty | undefined> { return publicProperties.find(property => property.id === id) }
export async function getPrivateProperties(): Promise<PrivateProperty[]> { return mockProperties }
export async function getCompanySettings(): Promise<CompanySettings> { return companySettings }

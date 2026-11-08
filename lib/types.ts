export type Language = 'en' | 'ku' | 'ar'
export type LocalizedText = { en?: string; ku: string; ar?: string }
export type PropertyType = 'house' | 'apartment' | 'land' | 'shop' | 'office'
export type ListingType = 'rent' | 'sale'
export type PropertyStatus = 'available' | 'reserved' | 'rented' | 'sold' | 'returned'
export type Currency = 'USD' | 'IQD'
export type RentPeriod = 'monthly' | 'yearly'

export type Property = {
  id: string; type: PropertyType; listingType: ListingType; status: PropertyStatus
  title: LocalizedText; description: LocalizedText; size: number; price: number; currency: Currency
  rentPeriod?: RentPeriod; address: LocalizedText; city: LocalizedText; rooms?: number; bathrooms?: number
  floor?: number; parking?: boolean; furnished?: boolean; yearBuilt?: number; photos: string[]; coverImage: string
  videoUrl?: string; location: { lat: number; lng: number }; boundary: [number, number][]; featured: boolean; createdAt: string
}
export type PrivateProperty = Property & { governmentCode?: string; ownership: 'company' | 'other'; purchaseCost?: number; purchaseCurrency?: Currency; purchaseDate?: string; purchaseEquivalent?: number; extraCosts?: number[]; ownerPerson?: { name: string; phone: string } }
export type PublicProperty = Omit<Property, never>
export type CompanySettings = { name: LocalizedText; intro: LocalizedText; logo: string; email: string; phones: string[]; socialLinks: { facebook?: string; instagram?: string; whatsapp?: string }; availableDays: LocalizedText; hours: string }
export type Transaction = { id: string; propertyId: string; type: 'sale' | 'rent' | 'return'; amount: number; currency: Currency; date: string }
export type TranslationDictionary = Record<string, string>
export type TranslationKey = string
export type PublicPropertyCard = Pick<PublicProperty, 'id' | 'title' | 'city' | 'type' | 'listingType' | 'status' | 'price' | 'currency' | 'coverImage' | 'size' | 'featured'>
export const languages: Language[] = ['ku', 'ar', 'en']
export const isRtl = (language: Language) => language !== 'en'
export const localized = (value: LocalizedText, language: Language) => value[language] || value.en || value.ku
export const formatMoney = (amount: number, currency: Currency, language: Language) => { const suffix = currency === 'USD' ? ' $' : language === 'en' ? ' IQD' : ' د.ع'; return amount.toLocaleString('en-US') + suffix }
export const propertyTypeKeys: PropertyType[] = ['house', 'apartment', 'land', 'shop', 'office']
export const propertyStatusKeys: PropertyStatus[] = ['available', 'reserved', 'rented', 'sold', 'returned']
export const listingTypeKeys: ListingType[] = ['rent', 'sale']

export const emptyPrivateProperty = (property: Property): PrivateProperty => ({ ...property, ownership: 'company' })

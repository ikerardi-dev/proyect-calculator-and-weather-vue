import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useMemoryStore } from './memory.js'

describe('useMemoryStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('empieza sin ningún valor guardado', () => {
    const store = useMemoryStore()
    expect(store.value).toBe(null)
    expect(store.hasValue).toBe(false)
  })

  it('guarda un valor con setMemory', () => {
    const store = useMemoryStore()
    store.setMemory(42)
    expect(store.value).toBe(42)
    expect(store.hasValue).toBe(true)
  })

  it('sobrescribe el valor si se llama setMemory otra vez', () => {
    const store = useMemoryStore()
    store.setMemory(10)
    store.setMemory(99)
    expect(store.value).toBe(99)
  })

  it('borra el valor con clearMemory', () => {
    const store = useMemoryStore()
    store.setMemory(42)
    store.clearMemory()
    expect(store.value).toBe(null)
    expect(store.hasValue).toBe(false)
  })
})
import './index.css'
const output = document.getElementById('output')!
function print(text = ''): void {
  console.log(text)
  output.textContent += text + '\n'
}

// Part 1
interface Adventurer {
  name: string
  className: string
  level: number
  health: number
  isActive: boolean
  nickname?: string
}

// Part 2
const party: Adventurer[] = [
  { name: 'Bimbo', className: 'Paladin', level: 8, health: 140, isActive: true, nickname: 'Dawnblade' },
  { name: 'Eric', className: 'Wizard', level: 9, health: 55, isActive: true },
  { name: 'Alistair', className: 'Bard', level: 2, health: 70, isActive: false },
  { name: 'Halt', className: 'Ranger', level: 4, health: 90, isActive: true },
]

// Part 3
function displayAdventurer(adventurer: Adventurer): void {
  const { name, className, level, health, isActive, nickname } = adventurer
  print(`Name: ${name}`)
  if (nickname) {
    print(`Nickname: ${nickname}`)
  }
  print(`Class: ${className}`)
  print(`Level: ${level}`)
  print(`Health: ${health}`)
  print(`Status: ${isActive ? 'Active' : 'Inactive'}`)
  print()
}

print('=== PARTY DETAILS ===')
print()
party.forEach(displayAdventurer)

// Part 4
function findAdventurer(name: string): Adventurer | undefined {
  return party.find((adventurer) => adventurer.name === name)
}

print('=== FIND ADVENTURER ===')
print()
for (const name of ['Eric', 'Zed']) {
  const found = findAdventurer(name)
  if (found) {
    print(`Found ${found.name}, the level ${found.level} ${found.className}.`)
  } else {
    print(`${name} was not found in the party.`)
  }
}
print()

// Part 5
print('=== ACTIVE ADVENTURERS ===')
print()
const activeAdventurers = party.filter((adventurer) => adventurer.isActive)
activeAdventurers.forEach((adventurer) => print(adventurer.name))
print()

print('=== HIGH LEVEL ADVENTURERS ===')
print()
const highLevel = party.filter((adventurer) => adventurer.level >= 5)
highLevel.forEach((adventurer) => print(adventurer.name))
print()

// Part 6
const summaries = party.map(
  ({ name, level, className }) => `${name} - Level ${level} ${className}`,
)
print('=== PARTY ===')
print()
summaries.forEach((line) => print(line))
print()

// Part 7
function takeDamage(adventurer: Adventurer, damage: number): void {
  adventurer.health = Math.max(0, adventurer.health - damage)
  print(`${adventurer.name} took ${damage} damage.`)
  if (adventurer.health === 0) {
    adventurer.isActive = false
    print(`${adventurer.name} has been defeated!`)
  } else {
    print(`${adventurer.name} has ${adventurer.health} health remaining.`)
  }
  print()
}

print('=== BATTLE ===')
print()
const bimbo = findAdventurer('Bimbo')
const eric = findAdventurer('Eric')
const halt = findAdventurer('Halt')
if (bimbo) takeDamage(bimbo, 40)
if (eric) takeDamage(eric, 100)
if (halt) takeDamage(halt, 25)

print('=== PARTY AFTER BATTLE ===')
print()
party.forEach(displayAdventurer)

// Part 8
function getAverageLevel(party: Adventurer[]): number {
  const total = party.reduce((sum, adventurer) => sum + adventurer.level, 0)
  return total / party.length
}

function getActiveCount(party: Adventurer[]): number {
  return party.filter((adventurer) => adventurer.isActive).length
}

print('=== PARTY STATS ===')
print()
print(`Average Level: ${getAverageLevel(party)}`)
print(`Active Adventurers: ${getActiveCount(party)}`)

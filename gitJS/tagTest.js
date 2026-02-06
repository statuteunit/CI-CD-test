import { execute } from './exec.js'
import { formatTime } from './time.js'
const timeLine = formatTime(new Date(), 'yyyyMMddhhmmss')
const gitTag = `git tag -a test.${timeLine} -m ${timeLine}`
const gitTagPush = `git push origin test.${timeLine}`

const exceTest = async () => {
	const test = await execute(`${gitTag}`)
	console.log('tag:test --> ', `${gitTag}`)
	const push = await execute(`${gitTagPush}`)
	console.log('tag:push --> ', `${gitTagPush}`)
}

exceTest()

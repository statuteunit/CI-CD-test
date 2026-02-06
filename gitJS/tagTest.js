import { formatTime } from './time.js'
const timeLine = formatTime(new Date(), 'yyyyMMddhhmmss')
const gitTag = `git tag -a test.${timeLine} -m ${timeLine}`
const gitTagPush = `git push origin test.${timeLine}`

const exceTest = async () => {
	console.log('tag:test --> ', `${gitTag}`)
	console.log('tag:push --> ', `${gitTagPush}`)
}

exceTest()

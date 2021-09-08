import { FILE_TYPE } from '~/entity/v1/file-type'
import { FILE_CATEGORY } from '~/entity/v1/file-category'
import { FILE_TYPES_GRADIENTS } from '~/entity/v1/file-gradient'

export class Portrait {
  public name: string = 'name default value';
  public fileType: FILE_TYPE = 'jpg';
  public category: FILE_CATEGORY = 'image';
  public seriesNumber: number = 0;
  public fileSize: string = '0';
  public gradientTo: string = '000000';

  // allows a partial key/value pair object to be passed to constuctor to hydrate the object. only used when not being instantiated through fetch
  public constructor (init?: Partial<Portrait>) {
    Object.assign(this, init)
  }

  // due to two step nature of useFetch – needing to declare variable as reactive first, then hydrate it after fetch,
  public hydrate (values: Object = {}): void {
    // 21.06.28 - very disappointing that i need the ignore statements. a) why doesn't chaining operator work, b) can't supply default values in the signature
    // while also appeasing the function call from fetch portrait
    // @ts-ignore
    this.name = values?.name
    // @ts-ignore
    this.fileType = values?.fileType
    // @ts-ignore
    this.seriesNumber = values?.seriesNumber
    // @ts-ignore
    this.fileSize = values?.fileSize
    this.setGradientTo()
  }

  public setGradientTo (): void {
    const p: Portrait = this
    FILE_TYPES_GRADIENTS.forEach(function (gradientPair) {
      if (gradientPair.fileCategory === p.category) {
        p.gradientTo = gradientPair.gradientTo
      }
    })
  }

  public setCategory (): void {}
}

/*
21.06.29 - replacing with api/v1/fetch-v1

export function fetchPortraitV1 (
  filename: String
): {
  fetchPortrait: () => void;
  portraitData: Object;
  fetchState: { error: Error | null; pending: boolean; timestamp: number };
  portrait: Portrait;
} {
  // based on example: https://vueschool.io/articles/vuejs-tutorials/nuxt-composition-api/
  // useFetch should be used with refs and not ssrRefs because state serialization and hydration is already covered by useFetch. Else, the state would be sent from server to client "twice", via the ssrRef and via useFetch
  // see: https://composition-api.nuxtjs.org/lifecycle/useFetch
  // Looks like refs are the only state that will be available on client and server side. To keep your current structure you could wrap portrait in your return like so: toRefs(portrait) and then it'd be converted into a refs within your components
  // I see this as redudancy and think it makes more sense just to make it a ref here and return it
  const portrait:Portrait = reactive(new Portrait({}))
  const portraitData = reactive({
    value: {
      data: {}
    }
  }) // super annoying - cannot set type of portraitData to whatever type useFetch returns so jerryrigging it here

  const { fetch: fetchPortrait, fetchState } = useFetch(async () => {
    portraitData.value = await axios.get('/v1/portrait/' + filename + '.json')
    portrait.hydrate(portraitData.value?.data) // 21.06.28 - wish i didn't need this function; wish i could either call the constructor again (can't) or reinitalize the object (can't)
    console.log('portrait hydrated')
  })

  fetchPortrait()
  return {
    portrait,
    portraitData,
    fetchPortrait,
    fetchState
  }
}
*/

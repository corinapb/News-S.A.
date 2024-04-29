export type NewsObjectType = {
  data_publicacao: string
  destaque: boolean
  editorias: string
  id: number
  imagens: string
  introducao: string
  link: string
  produto_id: number
  produtos: string
  produtos_relacionados: string
  tipo: string
  titulo: string
}

export type DataType = {
  count: number,
  items: NewsObjectType[],
  nextPage: number,
  page: number,
  previousPage: number,
  showingFrom: number,
  showingTo: number,
  totalPages: number,
}

export type DataContextType = {
  data: DataType | null,
  isLoading: boolean,
  error: string | null,
  mostRecentNews: NewsObjectType | undefined,
  firstPageNews: NewsObjectType[] | undefined,
  moreNews: NewsObjectType[] | undefined,
}

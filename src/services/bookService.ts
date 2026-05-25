import { supabase } from "../supabase";

export async function saveBook(book: any) {
  const { data: existingBook } = await supabase
    .from("books")
    .select("*")
    .eq("key", book.key)
    .maybeSingle();

  if (existingBook) {
    return existingBook;
  }

  const { data, error } = await supabase
    .from("books")
    .insert({
      key: book.key,
      title: book.title,
      author: book.author_name?.[0],
	  cover: book.cover_i
    })
    .select()
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

export async function getBooksWithWarnings() {
  const { data: books, error } = await supabase.from("books").select("*");

  console.log("BOOKS:", books);
  console.log("ERROR:", error);

  const { data: bookWarnings } = await supabase.from("books_warnings").select(`
			id_book,
			warnings (
				id,
				name,
				severity
			)
		`);

  if (!books || !bookWarnings) {
    return [];
  }

  return books.map((book) => ({
    ...book,
    warnings: bookWarnings
      .filter((bw) => bw.id_book === book.id)
      .map((bw) => bw.warnings),
  }));
}

from legacy.root_logger import get_logger
from pathlib import Path
import pandas as pd

logger = get_logger(__name__)
RESOURCES = Path(__file__).parent.parent / "resources"


def create_df(dataset):
    """
    Hopefully stays a one-liner
    """
    df = pd.DataFrame(data=dataset)
    return df


def clean_df(raw_data: pd.core.frame.DataFrame) -> pd.core.frame.DataFrame:
    """
    Augment as needed, IMDb does not provide perfectly cleaned data.
    """
    df = raw_data
    criteria = [df.Title, df.Season, df.Episode, df.imdbRating, df.Released]
    for criterion in criteria:
        df = df[pd.notnull(criterion)]
        df = df[criterion != "N/A"]
    return df


def convert_datatypes(df: pd.core.frame.DataFrame) -> pd.core.frame.DataFrame:
    """
    Due to project structure, all columns will be type `object`.
    """
    df["imdbRating"] = pd.to_numeric(df["imdbRating"])
    df["Released"] = pd.to_datetime(df["Released"])
    # Season 1 Episode 1 -> 0101, Season 3 Episode 19 -> 0319
    df["FQEpisode"] = pd.DataFrame(
        df["Season"].str.zfill(2) + df["Episode"].str.zfill(2)
    )
    # All episodes given a sequential ordering
    df = df.reset_index()
    df["Sequential"] = df.index
    return df
